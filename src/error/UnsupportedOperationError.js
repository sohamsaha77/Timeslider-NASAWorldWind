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
 * @exports UnsupportedOperationError
 */
define(['../error/AbstractError'],
    function (AbstractError) {
        "use strict";

        /**
         * Constructs an unsupported-operation error with a specified message.
         * @alias UnsupportedOperationError
         * @constructor
         * @classdesc Represents an error associated with an operation that is not available or should not be invoked.
         * Typically raised when an abstract function of an abstract base class is called because a subclass has not
         * implemented the function.
         * @augments AbstractError
         * @param {String} message The message.
         */
        var UnsupportedOperationError = function (message) {
            AbstractError.call(this, "UnsupportedOperationError", message);

            var stack;
            try {
                //noinspection ExceptionCaughtLocallyJS
                throw new Error();
            } catch (e) {
                stack = e.stack;
            }
            this.stack = stack;
        };

        UnsupportedOperationError.prototype = Object.create(AbstractError.prototype);

        return UnsupportedOperationError;
    });