;(function ( $, window, document, undefined ) {
   'use strict';

   // https://stackoverflow.com/questions/14504079/jquery-trigger-function-above-a-certain-window-width
   jQuery( document ).ready( function ( $ ) {

      var windowWidth = $( window ).width();
      if ( windowWidth > 768 ) {
         // Do stuff here

         $( '#linwoodCard' ).on( 'click', function () {
            $( '#linwoodModal' ).modal( "toggle" );
         } );

         $( '#ocascrCard' ).on( 'click', function () {
            $( '#ocascrModal' ).modal( "toggle" );
         } );

         $( '#sheilaCard' ).on( 'click', function () {
            $( '#sheilaModal' ).modal( "toggle" );
         } );
      }

   } );

})
( jQuery, window, document );