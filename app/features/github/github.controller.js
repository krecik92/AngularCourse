export default class GitHubController {
  constructor($http) {
    this.$http = $http;
    this.makeRequestRepo()
    this.makeRequest();
  }
  
  makeRequest() {
    this.$http.get('https://api.github.com/users/krecik92')
      .then(this.assignToScope.bind(this));
  }
  makeRequestRepo() {
    this.$http.get('https://api.github.com/users/krecik92/repos')
      .then(this.assignToScopeRepo.bind(this));
  }
  assignToScope(response){
    this.User = response.data;
    console.log(this.User)
  }
  assignToScopeRepo(response){
    this.Repo = response.data;
    console.log(this.Repo)
  }
}