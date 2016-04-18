import angular from 'angular';
import uirouter from 'angular-ui-router';

import routing from './github.routes';
import GitHubController from './github.controller';

import githubUser from './directives/github_user';
import githubRepo from './directives/github_repo';

export default angular.module('app.github', [uirouter])
  .config(routing)
  .controller('GitHubController', GitHubController)
  .directive('githubUser', githubUser)
  .directive('githubRepo', githubRepo)
  .name;