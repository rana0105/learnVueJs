new Vue({
  el: '#app',
  data: {
    title: 'I want to learn vuejs with expertness',
    test: 'I want to learn vuejs with expertness',
    link: 'https://translate.google.com.bd/?hl=en',
    linkTest: '<a target="blank" href="https://google.com">Google</a>',
    counter: 0,
    result: '',
    x: 0,
    y: 0,
    name: 'Rana'
  },
  methods: {
  	changeTitle: function (event) {
  		this.title = event.target.value;
  	}, 
  	callData: function () {
  		this.test = 'Hello!';
  		return this.test;
  	},
    increase: function (step, event) {
      this.counter +=step;
    },
    updateCoordinates: function (event) {
      this.x = event.clientX;
      this.y = event.clientY;
    },
    alertMe: function () {
      alert('Please input value');
    },
    increased: function () {
      this.counter++;
      this.result = this.counter > 5 ? 'Greater than 5' : 'Smaller than 5';
    },
    decreasei: function () {
      this.counter--;
      this.result = this.counter > 5 ? 'Greater than 5' : 'Smaller than 5';
    },
    results(){
      return this.counter > 5 ? 'Greater than 5' : 'Smaller than 5';
    }
  }
});