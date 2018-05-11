;(function ( $, window, document, undefined ) {
   'use strict';

   jQuery( document ).ready( function ( $ ) {

      $( '#linwoodCard' ).on( 'click', function () {
         $( '#linwoodModal' ).modal( "toggle" );
      } );

      $( '#ocascrCard' ).on( 'click', function () {
         $( '#ocascrModal' ).modal( "toggle" );
      } );

      $( '#sheilaCard' ).on( 'click', function () {
         $( '#sheilaModal' ).modal( "toggle" );
      } );

   } );

})
( jQuery, window, document );