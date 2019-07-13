<template>
  <div class="app">
    <div class="container">
      <div class="row header">
        <h3 class="col s12 center-align grey-text text-darken-2">Just random</h3>
        <p class="col s12 center-align grey-text text-darken-2">
          Created with ❤️ by
          <a href="https://madeddu.xyz">made2591</a>
        </p>
        <p class="col s12 center-align" style="margin-top: 0px;">
          <a
            class="github-button"
            href="https://github.com/made2591/justrandom"
            data-icon="octicon-star"
            aria-label="Star made2591/justrandom on GitHub"
          >Star</a>
        </p>
      </div>
      <div class="row">
        <form @submit.prevent="addChoice" class="col s12">
          <div class="input-field">
            <textarea
              v-model="newChoice"
              id="icon_prefix2"
              class="materialize-textarea"
              placeholder="Enter your choice"
            ></textarea>
            <label for="icon_prefix2"></label>
          </div>
          <div class="row">
            <div class="col s6">
              <button class="btn waves-effect col s12 green darken-3" @click.prevent="addChoice()">
                <i class="material-icons right">add_circle_outline</i>Add
              </button>
            </div>
            <div class="col s6">
              <button
                class="btn waves-effect col s12 blue darken-1"
                v-bind:class="{ disabled: choices.length === 0 }"
                @click.prevent="randomChoose()"
              >
                <i class="material-icons left">gamepad</i>Choose
              </button>
            </div>
          </div>
          <div class="row">
            <div class="col s6">
              <button
                class="btn waves-effect col s12 orange darken-3"
                @click.prevent="undoLastAction()"
              >
                <i class="material-icons right">autorenew</i>
                Undo
              </button>
            </div>
            <div class="col s6">
              <button class="btn waves-effect col s12 red darken-1" @click.prevent="resetChoices()">
                <i class="material-icons left">history</i>Reset
              </button>
            </div>
            <br />
            <div class="col s12">
              <ul class="collection">
                <li class="collection-item" v-for="choice in choices" :key="choice.id">
                  <p>
                    <label>
                      <input
                        type="checkbox"
                        :checked="choice.done"
                        @change="choice.done = !choice.done"
                      />
                      <span>{{choice.title}}</span>
                      <span style="cursor: pointer;">
                        <a @click.prevent="deleteChoice(choice)">
                          <i class="material-icons right teal-text">delete</i>
                        </a>
                      </span>
                    </label>
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </form>
      </div>
      <div class="row" v-bind:class="{ active: thanosModeActive, deactive: !thanosModeActive}">
        <div class="col s12">
          <h5 class="grey-text text-darken-2">Free presets 😎</h5>
        </div>
        <div class="col s12">
          <div class="card-panel">
            <span class="grey-text text-darken-2">Restaurants</span>
          </div>
        </div>
        <div class="col s4">
          <button
            class="btn waves-effect col s12 orange lighten-4 grey-text text-darken-2"
            @click.prevent="loadPresets(pizzas)"
          >🍕Pizza</button>
        </div>
        <div class="col s4">
          <button
            class="btn waves-effect col s12 light-blue lighten-4 grey-text text-darken-2"
            @click.prevent="loadPresets(sushis)"
          >🍣Sushi</button>
        </div>
        <div class="col s4">
          <button
            class="btn waves-effect col s12 green lighten-4 grey-text text-darken-2"
            @click.prevent="loadPresets(burgers)"
          >🍔Burger</button>
        </div>
      </div>
      <div class="row" v-bind:class="{ active: thanosModeActive, deactive: !thanosModeActive}">
        <div class="col s4">
          <button
            class="btn waves-effect col s12 pink lighten-4 grey-text text-darken-2"
            @click.prevent="loadPresets(steaks)"
          >🥩Steak</button>
        </div>
        <div class="col s4">
          <button
            class="btn waves-effect col s12 brown lighten-4 grey-text text-darken-2"
            @click.prevent="loadPresets(pastas)"
          >🍝Pasta</button>
        </div>
        <div class="col s4">
          <button
            class="btn waves-effect col s12 purple lighten-4 grey-text text-darken-2"
            @click.prevent="loadPresets(vegans)"
          >🥗Vegan</button>
        </div>
      </div>
      <div class="row" v-bind:class="{ active: thanosModeActive, deactive: !thanosModeActive}">
        <div class="col s12">
          <div class="card-panel">
            <span class="grey-text text-darken-2">Closet</span>
          </div>
        </div>
        <div class="col s6">
          <button
            class="btn waves-effect col s12 blue-grey lighten-4 grey-text text-darken-2"
            @click.prevent="loadPresets(forHim)"
          >👨‍🏫For him</button>
        </div>
        <div class="col s6">
          <button
            class="btn waves-effect col s12 lime lighten-4 grey-text text-darken-2"
            @click.prevent="loadPresets(forHer)"
          >👩‍🏭For her</button>
        </div>
      </div>
      <div class="row" v-bind:class="{ active: thanosModeActive, deactive: !thanosModeActive}">
        <div class="col s4">
          <button
            class="btn waves-effect col s12 orange lighten-4 grey-text text-darken-2"
            @click.prevent="loadPresets(halloween)"
          >🎃Hall.</button>
        </div>
        <div class="col s4">
          <button
            class="btn waves-effect col s12 light-blue lighten-4 grey-text text-darken-2"
            @click.prevent="loadPresets(lunapark)"
          >🎠L.Park</button>
        </div>
        <div class="col s4">
          <button
            class="btn waves-effect col s12 green lighten-4 grey-text text-darken-2"
            @click.prevent="loadPresets(lastOfTheYear)"
          >🎆31 Dec</button>
        </div>
      </div>
      <div class="row" v-bind:class="{ active: thanosModeActive, deactive: !thanosModeActive}">
        <div class="col s12">
          <div class="card-panel">
            <span class="grey-text text-darken-2">Activities</span>
          </div>
        </div>
        <div class="col s4">
          <button
            class="btn waves-effect col s12 indigo lighten-4 grey-text text-darken-2"
            @click.prevent="loadPresets(outdoors)"
          >⛰Trips</button>
        </div>
        <div class="col s4">
          <button
            class="btn waves-effect col s12 teal lighten-4 grey-text text-darken-2"
            @click.prevent="loadPresets(activities)"
          >🎬Relax</button>
        </div>
        <div class="col s4">
          <button
            class="btn waves-effect col s12 lime lighten-4 grey-text text-darken-2"
            @click.prevent="loadPresets(sports)"
          >⛷Sport</button>
        </div>
      </div>
      <div v-bind:class="{ active: thanosModeActive, deactive: !thanosModeActive}">
        <div class="row">
          <div class="col s12">
            <h5 class="grey-text text-darken-2 left-align">Advanced Set 🤓</h5>
          </div>
        </div>
        <div class="row">
          <div class="col s12">
            <div class="card-panel left-align">
              <span class="grey-text text-darken-2">Extraction mode</span>
            </div>
          </div>
          <div class="col s6">
            <p>
              <label>
                <input type="radio" v-model="rankingModeActive" v-bind:value="false" />
                <span>Standard Mode</span>
              </label>
            </p>
          </div>
          <div class="col s6">
            <p>
              <label>
                <input type="radio" v-model="rankingModeActive" v-bind:value="true" />
                <span>Ranking Mode</span>
              </label>
            </p>
          </div>
          <div class="col s12">
            <form action="#" class="col s12">
              <p class="range-field">
                <input type="range" id="test5" min="0" max="100" />
              </p>
            </form>
          </div>
          <div class="col s12">
            <div class="input-field col s12"></div>
          </div>
        </div>
      </div>
      <div id="resultModal" class="modal bottom-sheet">
        <div class="modal-content" v-if="rankingModeActive">
          <h4 class="col s6 offset-s3 center-align grey-text text-darken-2">My random chart is</h4>
          <ul class="collection">
            <li
              class="collection-item avatar"
              v-for="(choice, index) in choices"
              :key="choice.id"
              v-if="index < rankingLimit"
            >
              <img src="/first.png" v-if="index === 0" alt class="circle" />
              <img src="/second.png" v-if="index === 1" alt class="circle" />
              <img src="/third.png" v-if="index === 2" alt class="circle" />
              <img src="/generic.png" v-if="index > 2" alt class="circle" />
              <span class="title">{{choice.title}}</span>
              <p>Position {{index+1}}</p>
              <a href="#!" class="secondary-content" v-if="index === 0 && rankingLimit > 2">
                <i class="material-icons">grade</i>
                <i class="material-icons">grade</i>
                <i class="material-icons">grade</i>
              </a>
              <a href="#!" class="secondary-content" v-else>
                <i class="material-icons">grade</i>
              </a>
              <a href="#!" class="secondary-content" v-if="index === 1 && rankingLimit > 2">
                <i class="material-icons">grade</i>
                <i class="material-icons">grade</i>
              </a>
              <a href="#!" class="secondary-content" v-if="index === 2 && rankingLimit > 2">
                <i class="material-icons">grade</i>
              </a>
            </li>
          </ul>
        </div>
        <div class="modal-content" v-else>
          <h4 class="col s6 offset-s3 center-align grey-text text-darken-2">My random choice is</h4>
          <h2 class="center-align blue-text text-darken-4">{{this.resultText}}</h2>
        </div>
        <div class="modal-footer">
          <a href="#!" class="modal-close waves-effect waves-green btn-flat">
            <i class="material-icons">exit_to_app</i>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      pizzas: [
        'Margherita',
        'Prosciutto',
        'Funghi',
        'Salami',
        'Capricciosa',
        'Quattro Formaggi',
      ],
      sushis: [
        'Makizushi',
        'Gunkan Maki',
        'Nigiri',
        'Temaki',
        'Sasazushi',
        'Inarizushi',
      ],
      burgers: [
        'The Original Burger',
        'Cheese Burger',
        'Bacon Burger',
        'Double Animal',
        'Whiskey King Burger',
        'Buckhorn Burger',
      ],
      steaks: ['Kobe', 'Angus', 'Buffalo', 'Kangaroo', 'Turtle', 'Crocodile'],
      pastas: [
        'Amatriciana',
        'Carbonara',
        'Norma',
        'Frutti di mare',
        'Pesto',
        'Bolognese',
      ],
      vegans: ['Tofu', 'Soia', 'Tempeh', 'Seitan', 'Alghe', 'Tahin'],
      forHim: ['Dress', 'Pants', 'T-shirt', 'Skirt', 'Vest', 'Fantasy'],
      forHer: ['Kilt', 'Pants', 'T-shirt', 'Skirt', 'Vest', 'Fantasy'],
      halloween: [
        'Kobe',
        'Horror',
        'Fantasy',
        'Kangaroo',
        'Carbonara',
        'Turtle',
      ],
      lunapark: ['Pants', 'Dress', 'Fantasy', 'Skirt', 'Kilt', 'Shirt'],
      lastOfTheYear: [
        'Pants',
        'Dress',
        'Horror',
        'Skirt',
        'Carbonara',
        'Turtle',
      ],
      outdoors: [
        'Sea',
        'Mountain',
        'Countryside',
        'Desert',
        'Jungle',
        'Savana',
      ],
      activities: ['Study', 'Netflix', 'Cinema', 'Pub', 'Walk', 'Shopping'],
      sports: ['Ski', 'Bike', 'Run', 'Skate', 'Swim', 'Tennis'],
      choices: [],
      newChoice: '',
      thanosMode: 7,
      countClick: 0,
      thanosModeActive: false, // put false
      resultText: '',
      rankingModeActive: false, // put false
      rankingLimit: 3,
      history: [],
    };
  },
  watch: {
    choices: {
      handler() {
        localStorage.choices = JSON.stringify(this.choices);
      },
      deep: true,
    },
  },
  mounted() {
    if (localStorage.choices) {
      this.choices = JSON.parse(localStorage.choices);
      this.history.push(this.choices);
    }
    M.AutoInit();
    this.modal = document.getElementById('resultModal');
    M.Modal.init(this.modal, {});
    this.modal = M.Modal.getInstance(this.modal);
  },
  methods: {
    selectDistribution: () => {
      const elems = document.querySelectorAll('select');
      M.FormSelect.init(elems, {});
    },
    addChoice() {
      this.countClick = 0;
      this.choices.push({
        title: this.newChoice === '' ? this.choices.length + 1 : this.newChoice,
        done: false,
      });
      this.newChoice = '';
    },
    randomChoose() {
      this.countClick = 0;
      this.choices.sort(() => Math.random() - 0.5);
      this.resultText = this.choices[
        Math.floor(Math.random() * this.choices.length)
      ].title;
      this.modal.open();
    },
    undoLastAction() {
      const choiceIndex = this.choices.length - 1;
      if (choiceIndex >= 0) {
        this.choices.splice(choiceIndex, 1);
      }
      this.countClick = 0;
    },
    deleteChoice(choice) {
      const choiceIndex = this.choices.indexOf(choice);
      this.choices.splice(choiceIndex, 1);
      this.countClick = 0;
    },
    resetChoices() {
      this.choices = [];
      this.newChoice = '';
      this.countClick += 1;
      if (
        this.thanosModeActive === false &&
        this.countClick === this.thanosMode - 1
      ) {
        M.toast({ html: 'One more to unveil the infinity gems...' });
      }
      if (this.countClick === this.thanosMode) {
        this.thanosModeActive = true;
      }
    },
    loadPresets(elements) {
      this.choices = [];
      this.countClick = 0;
      elements.forEach((element) => {
        this.choices.push({
          title: element,
          done: false,
        });
        this.newChoice = '';
      });
      this.choices.sort(() => Math.random() - 0.5);
    },
  },
};
</script>

<style lang="scss" scoped>
.active {
  display: block;
}
.deactive {
  display: None;
}
</style>
