
<template>
  <div class="container">
    <h1 class="mt-4 text-center">Enter In Your Workout Log for Every Excerise</h1>
    <form>
      <div class="form-group">
        <label for="type">Type</label>
        <input
          type="text"
          placeholder="Ex: Pushups"
          v-model="type"
          class="form-control"
        />
      </div>
      <div class="form-group">
        <label for="sets">Sets</label>
        <input
          type="number"
          placeholder="Ex: 3"
          v-model="sets"
          class="form-control"
        />
      </div>
      <div class="form-group">
        <label for="reps">Reps</label>
        <input
          type="number"
          placeholder="Ex: 20"
          v-model="reps"
          class="form-control"
        />
      </div>
      <button type="button" @click="onSubmit" class="btn btn-dark">
        Enter
      </button>
    </form>
    <table class="table mt-5">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Type</th>
          <th scope="col">Sets</th>
          <th scope="col">Reps</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(entry, i) in sortedList" :key="i">
          <th scope="row">{{ ++i }}</th>
          <td>{{ entry.type }}</td>
          <td>{{ entry.sets }}</td>
          <td>{{ entry.reps }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "Leaderboard",
  data: () => ({ type: "", sets: "", reps: "", allScores: [] }),
  computed: {
    sortedList: function() {
      return this.allScores.slice().sort(function(a, b) {
        return b.score - a.score;
      });
    },
  },
  methods: {
    onSubmit() {
      this.allScores.push({ type: this.type, sets: this.sets, reps: this.reps });
      this.clearForm();
    },
    clearForm() {
      this.type = "";
      this.sets = "";
      this.reps = "";
    },
  },
};
</script>

