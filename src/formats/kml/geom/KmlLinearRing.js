/*
 * Copyright 2003-2006, 2009, 2017, 2020 United States Government, as represented
 * by the Administrator of the National Aeronautics and Space Administration.
 * All rights reserved.
 *
 * The NASAWorldWind/WebWorldWind platform is licensed under the Apache License,
 * Version 2.0 (the "License"); you may not use this file except in compliance
 * with the License. You may obtain a copy of the License
 * at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed
 * under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR
 * CONDITIONS OF ANY KIND, either express or implied. See the License for the
 * specific language governing permissions and limitations under the License.
 *
 * NASAWorldWind/WebWorldWind also contains the following 3rd party Open Source
 * software:
 *
 *    ES6-Promise – under MIT License
 *    libtess.js – SGI Free Software License B
 *    Proj4 – under MIT License
 *    JSZip – under MIT License
 *
 * A complete listing of 3rd Party software notices and licenses included in
 * WebWorldWind can be found in the WebWorldWind 3rd-party notices and licenses
 * PDF found in code  directory.
 */
define([
    './KmlLineString',
    '../KmlElements'
], function (KmlLineString,
             KmlElements) {
    "use strict";
    /**
     * Constructs an KmlLinearRing element. Applications don't usually call this constructor. It is called by objects in
     * the hierarchy of KmlObject.
     * @alias KmlLinearRing
     * @classdesc Contains the data associated with LinerRing
     * @param options {Object}
     * @param options.objectNode {Node} Node representing LinearRing.
     * @param options.style {Promise} Promise of style to be applied to current geometry
     * @constructor
     * @see https://developers.google.com/kml/documentation/kmlreference#linearring
     * @augments KmlLineString
     */
    var KmlLinearRing = function (options) {
        KmlLineString.call(this, options);
    };

    KmlLinearRing.prototype = Object.create(KmlLineString.prototype);

    /**
     * @inheritDoc
     */
    KmlLinearRing.prototype.getTagNames = function () {
        return ['LinearRing'];
    };

    KmlElements.addKey(KmlLinearRing.prototype.getTagNames()[0], KmlLinearRing);

    return KmlLinearRing;
});