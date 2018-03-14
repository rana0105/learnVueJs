new Vue({
  el: '#app',
  data: {
    title: 'I want to learn vuejs with expertness'
  },
  methods: {
  	changeTitle: function (event) {
  		this.title = event.target.value;
  	}
  }
});