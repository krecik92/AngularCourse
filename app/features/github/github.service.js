export default class GitHubService {
  constructor($http) {
    this.$http = $http;
  }

  getUser(user) {
    return this.$http.get('https://api.github.com/users/' + user + '?client_id=a0955300725f3ff4347a&client_secret=ffa18afdfcaaf896e64581f59ec4022535215777');
  }
  
  getRepos(user) {
    return this.$http.get('https://api.github.com/users/'+ user +'/repos' + '?client_id=a0955300725f3ff4347a&client_secret=ffa18afdfcaaf896e64581f59ec4022535215777');
  }
}