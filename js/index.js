new Vue({
  el: '#app',
  data: {
    title: 'I want to learn vuejs with expertness',
    test: 'I want to learn vuejs with expertness',
    link: 'https://translate.google.com.bd/?hl=en',
    linkTest: '<a target="blank" href="https://google.com">Google</a>'
  },
  methods: {
  	changeTitle: function (event) {
  		this.title = event.target.value;
  	}, 
  	callData: function () {
  		this.test = 'Hello!';
  		return this.test;
  	}
  }
});