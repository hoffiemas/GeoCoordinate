import { ICoordinateShape } from './interfaces/i-coordinate-shape';
import './interfaces/i-number';
export declare class GeoCoordinate {
    private _latitude;
    private _longitude;
    private _altitude;
    private _horizontalAccuracy;
    private _verticalAccuracy;
    private _speed;
    private _course;
    private _earthRadius;
    latitude: number;
    longitude: number;
    altitude: number;
    horizontalAccuracy: number;
    verticalAccuracy: number;
    speed: number;
    course: number;
    earthRadius: number;
    /**
     * returns true if neither longitude nor latitude is set.
     */
    readonly isUnknown: boolean;
    readonly isKnown: boolean;
    constructor(obj?: ICoordinateShape);
    Equals(geoCoordinate: GeoCoordinate): boolean;
    toString: () => string;
    getDistanceTo(other: GeoCoordinate, loxodrome?: boolean): number | null;
    getInitBearingTo(other: GeoCoordinate, loxodrome?: boolean): number | null;
    getMidBearingTo(other: GeoCoordinate, loxodrome?: boolean): number | null;
    getFinalBearingTo(other: GeoCoordinate, loxodrome?: boolean): number | null;
    getMidPointTo(other: GeoCoordinate, loxodrome?: boolean): GeoCoordinate | null;
    getPointBetween(other: GeoCoordinate, partial: number): GeoCoordinate | null;
    getDestinationPointWithInitBearing(distance: number, bearing: number, loxodrome?: boolean): GeoCoordinate | null;
}
