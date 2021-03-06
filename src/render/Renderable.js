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
/**
 * @exports Renderable
 */
define([
        '../util/Logger',
        '../error/UnsupportedOperationError'
    ],
    function (Logger,
              UnsupportedOperationError) {
        "use strict";

        /**
         * Constructs a base renderable.
         * @alias Renderable
         * @constructor
         * @classdesc Represents a shape or other object that can be rendered. This is an abstract class and is not
         * meant to be instantiated directly.
         */
        var Renderable = function () {

            /**
             * The display name of the renderable.
             * @type {String}
             * @default "Renderable"
             */
            this.displayName = "Renderable";

            /**
             * Indicates whether to display this renderable.
             * @type {Boolean}
             * @default true
             */
            this.enabled = true;

            /**
             * Indicates the object to return as the userObject of this shape when picked. If null,
             * then this shape is returned as the userObject.
             * @type {Object}
             * @default null
             * @see  [PickedObject.userObject]{@link PickedObject#userObject}
             */
            this.pickDelegate = null;

            /**
             * An application defined object associated with this renderable. A typical use case is to associate
             * application defined data with a picked renderable.
             * @type {Object}
             * @default An empty object
             */
            this.userProperties = {};
        };

        /**
         * Render this renderable. Some shapes actually draw themselves during this call, others only add themselves
         * to the draw context's ordered rendering list for subsequent drawing when their renderOrdered method is called.
         * This method is intended to be called by layers such as {@link RenderableLayer} and not by applications.
         * @param {DrawContext} dc The current draw context.
         */
        Renderable.prototype.render = function (dc) {
            throw new UnsupportedOperationError(
                Logger.logMessage(Logger.LEVEL_SEVERE, "Renderable", "render", "abstractInvocation"));
        };

        return Renderable;
    });