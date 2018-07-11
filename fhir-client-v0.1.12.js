(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){

(function webpackUniversalModuleDefinition(root, factory) {

        if(typeof exports === 'object' && typeof module === 'object')

                module.exports = factory();

        else if(typeof define === 'function' && define.amd)

                define([], factory);

        else if(typeof exports === 'object')

                exports["fhir"] = factory();

        else

                root["fhir"] = factory();

})(this, function() {

return /******/ (function(modules) { // webpackBootstrap

/******/        // The module cache

/******/        var installedModules = {};


/******/        // The require function

/******/        function __webpack_require__(moduleId) {

/******/                // Check if module is in cache

/******/                if(installedModules[moduleId])

/******/                        return installedModules[moduleId].exports;

/******/                // Create a new module (and put it into the cache)

/******/                var module = installedModules[moduleId] = {

/******/                        exports: {},

/******/                        id: moduleId,

/******/                        loaded: false

/******/                };

/******/                // Execute the module function

/******/                modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/                // Flag the module as loaded

/******/                module.loaded = true;
 
/******/                // Return the exports of the module

/******/                return module.exports;

/******/        }





/******/        // expose the modules object (__webpack_modules__)

/******/        __webpack_require__.m = modules;



/******/        // expose the module cache

/******/        __webpack_require__.c = installedModules;


/******/        // __webpack_public_path__

/******/        __webpack_require__.p = "";


