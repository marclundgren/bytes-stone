const urls = [
  'https://user-images.githubusercontent.com/1154834/34272231-75442e22-e644-11e7-8d48-c97dbd2cab11.png',
  'https://user-images.githubusercontent.com/1154834/34272232-755a0382-e644-11e7-97d2-35c93f7305dd.png',
  'https://user-images.githubusercontent.com/1154834/34272233-756f20aa-e644-11e7-8511-8043099f7545.png',
  'https://user-images.githubusercontent.com/1154834/34272234-75845808-e644-11e7-9723-265d116528fd.png',
  'https://user-images.githubusercontent.com/1154834/34272235-759a47f8-e644-11e7-8e5a-150e9f9e0763.png',
  'https://user-images.githubusercontent.com/1154834/34272236-75b09d46-e644-11e7-884a-b10bb4ee6693.png',
  'https://user-images.githubusercontent.com/1154834/34272237-75c6e38a-e644-11e7-8288-cbd64c8ff2ac.png',
  'https://user-images.githubusercontent.com/1154834/34272238-75dc2d58-e644-11e7-996b-a02d3234d08e.png',
  'https://user-images.githubusercontent.com/1154834/34272239-75f05440-e644-11e7-8458-129b7d6a060b.png',
  'https://user-images.githubusercontent.com/1154834/34272240-7605b11e-e644-11e7-8cfc-9621934b6a39.png',
  'https://user-images.githubusercontent.com/1154834/34272241-761eb3ee-e644-11e7-8c03-cb609cff298a.png',
  'https://user-images.githubusercontent.com/1154834/34272242-76335dee-e644-11e7-949b-6cc46f053960.png',
  'https://user-images.githubusercontent.com/1154834/34272243-76497df4-e644-11e7-834a-7875f2c08caa.png',
  'https://user-images.githubusercontent.com/1154834/34272244-76723618-e644-11e7-8f3c-341ad3da6340.png',
  'https://user-images.githubusercontent.com/1154834/34272245-76898d36-e644-11e7-9038-f047459dbef3.png',
  'https://user-images.githubusercontent.com/1154834/34272246-76a22e9a-e644-11e7-91ba-65f52949bfde.png',
  'https://user-images.githubusercontent.com/1154834/34272247-76b78ed4-e644-11e7-8083-275303686c33.png',
  'https://user-images.githubusercontent.com/1154834/34272248-76cda264-e644-11e7-97ba-a7e3f5b3d5e7.png',
  'https://user-images.githubusercontent.com/1154834/34272249-76e32c1a-e644-11e7-87e0-e8c6d3573b3c.png',
  'https://user-images.githubusercontent.com/1154834/34272250-76f81f58-e644-11e7-862f-02cc201d1655.png',
  'https://user-images.githubusercontent.com/1154834/34272251-770dcd94-e644-11e7-9a01-c577e4ae2ab6.png',
  'https://user-images.githubusercontent.com/1154834/34272252-772417ac-e644-11e7-88f2-8b90788d8656.png',
  'https://user-images.githubusercontent.com/1154834/34272253-7743e2bc-e644-11e7-94d8-df4a4ed25d92.png',
  'https://user-images.githubusercontent.com/1154834/34272254-7758ce70-e644-11e7-9d9c-c4fb2d50e7d7.png',
  'https://user-images.githubusercontent.com/1154834/34272255-776e4bd8-e644-11e7-940e-0a3a0a96de5e.png',
  'https://user-images.githubusercontent.com/1154834/34272256-778660e2-e644-11e7-9054-f5d11bef53c5.png',
  'https://user-images.githubusercontent.com/1154834/34272257-779f1bfa-e644-11e7-9cab-bc7852542df8.png',
  'https://user-images.githubusercontent.com/1154834/34272258-77b5292c-e644-11e7-9c4b-03d8bd850a8a.png',
  'https://user-images.githubusercontent.com/1154834/34272259-77c9f226-e644-11e7-9a1a-2009835078a1.png',
  'https://user-images.githubusercontent.com/1154834/34272260-77de7cbe-e644-11e7-9166-9e4b4147f18d.png',
  'https://user-images.githubusercontent.com/1154834/34272261-77f49774-e644-11e7-8736-092ccb8836db.png',
  'https://user-images.githubusercontent.com/1154834/34272262-7809ead4-e644-11e7-8901-14c6e87dc41a.png',
  'https://user-images.githubusercontent.com/1154834/34272263-781ebbe4-e644-11e7-8206-ac4da5dfb22b.png',
  'https://user-images.githubusercontent.com/1154834/34272265-78340d00-e644-11e7-8310-2b00ea9edc0b.png',
  'https://user-images.githubusercontent.com/1154834/34272266-784a0600-e644-11e7-92dd-1f0229c3b424.png',
  'https://user-images.githubusercontent.com/1154834/34272267-786434f8-e644-11e7-8281-f109e0468b11.png',
  'https://user-images.githubusercontent.com/1154834/34272268-787ce962-e644-11e7-8fa2-00b246c70b4c.png',
  'https://user-images.githubusercontent.com/1154834/39735862-6caceccc-5232-11e8-9779-9e6bf3591df7.png',
  'https://user-images.githubusercontent.com/1154834/39735863-6cc80a7a-5232-11e8-8026-37e66f801532.png',
  'https://user-images.githubusercontent.com/1154834/39735864-6ce51b60-5232-11e8-89bf-6f27019f7453.png',
  'https://user-images.githubusercontent.com/1154834/39735866-6d01f208-5232-11e8-949b-24e8bc959c86.png',
  'https://user-images.githubusercontent.com/1154834/39735867-6d1de238-5232-11e8-95a9-6660fc8f8273.png',
  'https://user-images.githubusercontent.com/1154834/39735868-6d3a63a4-5232-11e8-89f8-3ef636fa1b3d.png',
  'https://user-images.githubusercontent.com/1154834/39735869-6d56e498-5232-11e8-9a2a-2f21d6c36452.png',
  'https://user-images.githubusercontent.com/1154834/39735870-6d785f6a-5232-11e8-8f0f-691b138787cb.png',
  'https://user-images.githubusercontent.com/1154834/39735871-6d934078-5232-11e8-9f54-4c1e520124a6.png',
  'https://user-images.githubusercontent.com/1154834/39735872-6dafba50-5232-11e8-9b6f-e1a45b4352a7.png',
  'https://user-images.githubusercontent.com/1154834/39735873-6dcdb9c4-5232-11e8-8049-1f58c3ad1be2.png',
  'https://user-images.githubusercontent.com/1154834/39735874-6de8a824-5232-11e8-8b60-03471e6288aa.png',
  'https://user-images.githubusercontent.com/1154834/39735875-6e038d7e-5232-11e8-83ff-cab95c1c51ad.png',
  'https://user-images.githubusercontent.com/1154834/39735876-6e2282f6-5232-11e8-9f11-da9b975a4390.png',
  'https://user-images.githubusercontent.com/1154834/39735877-6e3fdf40-5232-11e8-91eb-3226e4e9aca2.png',
  'https://user-images.githubusercontent.com/1154834/39735878-6e5fa262-5232-11e8-915a-8a80829424e3.png',
  'https://user-images.githubusercontent.com/1154834/39735879-6e7a5918-5232-11e8-8470-26dcc590f6fe.png',
  'https://user-images.githubusercontent.com/1154834/39735880-6e977764-5232-11e8-9326-ce752b835168.png',
  'https://user-images.githubusercontent.com/1154834/39735881-6eb85682-5232-11e8-8363-39ec0c841df4.png',
  'https://user-images.githubusercontent.com/1154834/39735882-6edc08e8-5232-11e8-86f9-0e6e4394fb0d.png',
  'https://user-images.githubusercontent.com/1154834/39735883-6ef9eb74-5232-11e8-8506-155a219cb624.png',
  'https://user-images.githubusercontent.com/1154834/39735884-6f1618bc-5232-11e8-8719-05cf486dbdee.png',
  'https://user-images.githubusercontent.com/1154834/39735885-6f389fcc-5232-11e8-9237-02eb461ee8ae.png',
  'https://user-images.githubusercontent.com/1154834/39735886-6f5455aa-5232-11e8-8c5c-99448389b276.png',
  'https://user-images.githubusercontent.com/1154834/39735888-6f7038c4-5232-11e8-96d8-bae59f7858df.png',
  'https://user-images.githubusercontent.com/1154834/39735889-6f8b9024-5232-11e8-8e19-f8ffb5829d61.png',
  'https://user-images.githubusercontent.com/1154834/39735890-6fab32da-5232-11e8-8318-33c7f3e0ad44.png',
  'https://user-images.githubusercontent.com/1154834/39735891-6fc9ea90-5232-11e8-8389-3cc30ea2e2b1.png',
  'https://user-images.githubusercontent.com/1154834/39735892-6fe5326e-5232-11e8-9abf-e0e8cd1caf69.png',
  'https://user-images.githubusercontent.com/1154834/39735893-700b819e-5232-11e8-8def-5edd5cc7e51e.png',
  'https://user-images.githubusercontent.com/1154834/39735894-702a8288-5232-11e8-8a6c-387c23b156ba.png',
  'https://user-images.githubusercontent.com/1154834/39735896-70659de6-5232-11e8-9c8f-2c8ab2acbd25.png',
]

const getRandomInteger = ({max = 10, min = 0}) => {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

const shuffle = (array) => {
  const arrayCopy = array.slice(0) // avoid mutation

  var currentIndex = arrayCopy.length, temporaryValue, randomIndex

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex -= 1

    // And swap it with the current element.
    temporaryValue = arrayCopy[currentIndex]
    arrayCopy[currentIndex] = arrayCopy[randomIndex]
    arrayCopy[randomIndex] = temporaryValue
  }

  return arrayCopy
}

Vue.component('card-item', {
  template: '<div class="card"><img v-bind:src="url" /></div>',
  props: ['url'],
})

new Vue({
  el: '#app',
  data: {
    urls,
    nextTodoId: 4,
    show: true,
  },
  methods: {
    threeRandomCards: function() {
      const shuffledUrls = shuffle(this.urls)

      return [
        {id: 0, url: shuffledUrls[0] },
        // {id: 1, url: shuffledUrls[1] },
        // {id: 2, url: shuffledUrls[2] },
      ]
    },
    reshuffle() {
      this.$forceUpdate();
    },
    rerender(){
      this.$forceUpdate();
      this.show = false
      this.$nextTick(() => {
        this.show = true
        this.$nextTick(() => {
          this.$forceUpdate();
        })
      })
    }
  }
})
