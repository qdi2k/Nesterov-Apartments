'use client'

import React, {ChangeEvent, useRef, useState} from 'react'
import {
  YMaps,
  Map,
  Placemark,
  Polyline,
  useYMaps,
  ZoomControl,
} from '@pbe/react-yandex-maps'
import styles from './RouteMap.module.css'
import {Button, Icon, Input, Text} from '@/shared/ui'

type Coordinates = [number, number]
type RouteCoordinates = Coordinates[]

interface IMapContentProps {
  initialPosition: Coordinates
  destination: string
  destinationCoords: Coordinates | null
  routeCoords: RouteCoordinates | null
  distance: number | null
  setDestinationCoords: (destination: Coordinates | null) => void
  setRouteCoords: (route: RouteCoordinates | null) => void
  setDistance: (distance: number | null) => void
  handleInputChange: (value: ChangeEvent<HTMLInputElement>) => void
}

const initialPosition: Coordinates = [55.403793, 43.843715]

export function RouteMap() {
  const [destination, setDestination] = useState('')
  const [destinationCoords, setDestinationCoords] =
    useState<Coordinates | null>(null)
  const [routeCoords, setRouteCoords] = useState<RouteCoordinates | null>(null)
  const [distance, setDistance] = useState<number | null>(null)

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setDestination(event.target.value)
  }

  return (
    <YMaps
      query={{lang: 'ru_RU', apikey: 'e1b517d8-42cb-496a-b113-654c9680f1eb'}}
    >
      <MapContent
        initialPosition={initialPosition}
        destination={destination}
        destinationCoords={destinationCoords}
        routeCoords={routeCoords}
        distance={distance}
        setDestinationCoords={setDestinationCoords}
        setRouteCoords={setRouteCoords}
        setDistance={setDistance}
        handleInputChange={handleInputChange}
      />
    </YMaps>
  )
}

const MapContent = ({
  initialPosition,
  destination,
  destinationCoords,
  routeCoords,
  distance,
  setDestinationCoords,
  setRouteCoords,
  setDistance,
  handleInputChange,
}: IMapContentProps) => {
  const ymaps = useYMaps(['geocode', 'route'])
  const mapRef = useRef(null)

  const handleRouteButtonClick = async () => {
    if (!ymaps) {
      console.error('Yandex Maps API еще не загружен')
      return
    }

    try {
      const res = await ymaps.geocode('Арзамас' + destination)
      const firstGeoObject = res.geoObjects.get(0)

      if (!firstGeoObject || !firstGeoObject.geometry) {
        throw new Error('Адрес не найден')
      }

      const geometry = firstGeoObject.geometry as ymaps.IGeometry & {
        getCoordinates(): Coordinates
      }
      const coords: Coordinates = geometry.getCoordinates()
      setDestinationCoords(coords)

      const route = await (ymaps as any).route([initialPosition, coords], {
        mapStateAutoApply: true,
      })

      const paths = route.getPaths()
      if (!paths || paths.length === 0) {
        throw new Error('Маршрут не может быть построен')
      }

      const coordinates = paths
        .get(0)
        .getSegments()
        .reduce((acc: RouteCoordinates, segment: any) => {
          return acc.concat(segment.getCoordinates())
        }, [])

      setRouteCoords(coordinates)

      const routeDistance = route.getLength()
      setDistance(routeDistance)
    } catch (error) {
      console.error('Ошибка при построении маршрута:', error)
      alert(`Ошибка при построении маршрута: ${(error as Error).message}`)
    }
  }

  const handleZoomIn = () => {
    if (mapRef.current) {
      const map = mapRef.current
      map.setZoom(map.getZoom() + 1, {duration: 300})
    }
  }

  const handleZoomOut = () => {
    if (mapRef.current) {
      const map = mapRef.current
      map.setZoom(map.getZoom() - 1, {duration: 300})
    }
  }

  const handleResetPosition = () => {
    if (mapRef.current) {
      const map = mapRef.current
      map.setCenter(initialPosition, 14, {duration: 300})
    }
  }

  const customIcon = {
    preset: 'islands#redIcon',
    iconColor: 'rgba(255, 77, 0, 1)',
  }

  return (
    <div className={styles.containerRoute}>
      <div className={styles.mapContainer}>
        <Map
          defaultState={{center: initialPosition, zoom: 14}}
          modules={['multiRouter.MultiRoute']}
          options={{suppressMapOpenBlock: true}}
          className={styles.map}
          instanceRef={mapRef}
        >
          <Placemark geometry={initialPosition} />
          {destinationCoords && (
            <Placemark geometry={destinationCoords} options={customIcon} />
          )}
          {routeCoords && (
            <Polyline
              geometry={routeCoords}
              options={{
                strokeColor: 'rgba(255, 96, 27, 1)',
                strokeWidth: 3,
              }}
            />
          )}
          {distance && (
            <div className={styles.distance}>
              <Text>Расстояние: {(distance / 1000).toFixed(2)} км</Text>
            </div>
          )}
        </Map>
        <div className={styles.controlButtons}>
          <button
            onClick={handleResetPosition}
            className={styles.resetPositionButton}
          >
            <Icon name='plane' size={18} color='white' />
          </button>
          <div className={styles.customZoomControls}>
            <button onClick={handleZoomIn} className={styles.zoomButton}>
              <Icon name='plus' size={14} color='white' />
            </button>
            <div className={styles.divider} />
            <button onClick={handleZoomOut} className={styles.zoomButton}>
              <Icon name='minus' size={14} color='white' />
            </button>
          </div>
        </div>
      </div>
      <div className={styles.routeContainer}>
        <Text size='sMedium' weight='semiBold'>
          Как добраться?
        </Text>
        <div className={styles.test}>
          <Input
            placeholder='Ваше местоположение'
            value={destination}
            onChange={handleInputChange}
            classNameContainer={styles.input}
          />
          <Button
            className={styles.button}
            isMore
            onClick={handleRouteButtonClick}
          >
            Показать маршрут
          </Button>
        </div>
      </div>
    </div>
  )
}
