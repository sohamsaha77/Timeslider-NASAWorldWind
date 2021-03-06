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
// It simply adds XmlParser, which encapsulates the fact that, there are different implementations
define([
        '../error/ArgumentError',
        '../util/Logger'
    ],
    function(
        ArgumentError,
        Logger
    ){
        /**
         * Constructor function responsible for abstracting away the complexities in parsing XmlDocuments.
         * @param document String representation of the xml document.
         * @constructor
         */
        var XmlDocument = function(document) {
            /**
             * Retrieved textual representation of the document.
             */
            this._document = document;
        };

        /**
         * This method abstracts parsing of XmlDocument away form users of this class. It should work in all browsers
         * since IE5
         * @returns {Document} Parsed dom.
         */
        XmlDocument.prototype.dom = function() {
            if(DOMParser) {
                var parser = new DOMParser();
                var parsedDocument = parser.parseFromString(this._document, "text/xml");
                if(parsedDocument.getElementsByTagName("parsererror").length || !parsedDocument) {
                    throw new ArgumentError(
                        Logger.logMessage(Logger.LEVEL_SEVERE, "XmlDocument", "dom", "Invalid XML document. " +
                            parsedDocument.getElementsByTagName("parsererror")[0].innerHTML)
                    );
                }
                return parsedDocument;
            } else {
                // Support for IE6
                var xmlDoc=new ActiveXObject("Microsoft.XMLDOM");
                xmlDoc.async=false;
                xmlDoc.loadXML(text);
                return xmlDoc;
            }
        };

        XmlDocument.isValid = function(document) {
            // TODO refactor.
            try {
                new XmlDocument(document).dom();
                return true;
            } catch(e) {
                return false;
            }
        };

        return XmlDocument;
});