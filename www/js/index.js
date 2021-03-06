/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var appCordova = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        appCordova.receivedEvent('deviceready');
        var eventDeviceReady = new CustomEvent('deviceready');
        document.getElementById('notification').dispatchEvent(eventDeviceReady);
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        console.log('Received Event: ' + id);

        window.push.register(function (id, data){
            var event = new CustomEvent('Notification', { 'detail': {'id' : id, 'data' : data }});
            document.getElementById('notification').dispatchEvent(event);
            console.log('Event received ' + id + ' ' + data );
        },{ 
                'host' : 'objetspartages.org', 
                'port' : '5672' , 
                'username' : 'toto', 
                'password' : 'toto' , 
                'virtualHost' : 'toto', 
                'routingKey' : 'edy' 
        });
    }
};
$(document).ready(function(){
    appCordova.initialize();
});
