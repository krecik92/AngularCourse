import angular from 'angular';
import uirouter from 'angular-ui-router';
import firebase from 'firebase';
import angularfire from 'angularfire';
import routing from './home.routes';
import HomeController from './home.controller';

export default angular.module('app.home', [uirouter], ["firebase"])
  .config(routing)
  .controller('HomeController', HomeController)
  .name;