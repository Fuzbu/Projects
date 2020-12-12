<template>
  <div id="app">
    <h1>The Greeting Kata</h1>
    <h3>Suttitham Jampatong (Paan)</h3>

    <section>
      <div><b>Requirement 1</b></div>
      {{ requirement1(input1) }}
    </section>
    <br />
    <section>
      <div><b>Requirement 2</b></div>

      {{ requirement2(input2) }}
    </section>
    <br />
    <section>
      <div><b>Requirement 3</b></div>
      {{ requirement3(input3) }}
    </section>
    <br />
    <section>
      <div><b>Requirement 4</b></div>
      {{ requirement4(input4) }}
    </section>
    <br />
    <section>
      <div><b>Requirement 5</b></div>
      {{ requirement5(input5) }}
    </section>
    <br />
    <section>
      <div><b>Requirement 6</b></div>
      {{ requirement6(input6) }}
    </section>
    <br />
    <section>
      <div><b>Requirement 7</b></div>
      {{ requirement7(input7) }}
    </section>
    <br />
    <section>
      <div><b>Requirement 8</b></div>
      {{ requirement8(input8) }}
    </section>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      input1: "Bob",
      input2: null,
      input3: "JERRY",
      input4: ["Jill", "Jane"],
      input5: ["Amy", "Brian", "Charlotte"],
      input6: ["Amy", "BRIAN", "Charlotte"],
      input7: ["Bob", "Charlie", "Dianne"],
      input8: ["Bob", '"Charlie", Dianne."'],
    };
  },

  methods: {
    requirement1(name) {
      let a = "Hello, " + name + ".";
      console.log(a);
      return a;
    },
    requirement2(name) {
      if (name != null) {
        return "Hello, " + name + ".";
      } else {
        return "Hello, my friend.";
      }
    },
    requirement3(name) {
      if (name != null) {
        if (name == name.toUpperCase()) {
          let shoutStr = "Hello, " + name + ".";
          return shoutStr.toUpperCase();
        } else {
          return "Hello, " + name + ".";
        }
      } else {
        console.log("Hello, my friend.");
      }
    },
    requirement4(nameArr) {
      return "Hello, " + nameArr[0] + " and " + nameArr[1] + ".";
    },
    requirement5(nameArr) {
      let returnStr = `Hello, ${nameArr[0]}, ${nameArr[1]}, and ${nameArr[2]}.`;
      console.log("requirement5:" + returnStr);
      return returnStr;
    },
    requirement6(nameArr) {
      let shoutStr6 = `And Hello ${nameArr[1]}!`;
      let returnStr6 = `Hello, ${nameArr[0]} and ${
        nameArr[2]
      }. ${shoutStr6.toUpperCase()}`;
      return returnStr6;
    },

    requirement7(nameArr) {
      return (
        '"Hello,' +
        " " +
        nameArr[0] +
        "," +
        nameArr[1] +
        " and " +
        nameArr[2] +
        '."'
      );
    },
    requirement8(nameArr) {
      for (var i = 0; i <= nameArr.length; i++) {
        if (nameArr[i]) nameArr[i] = nameArr[i].replace('"', "");
      }
      let returnStr = '"Hello,' + " " + nameArr[0] + " and " + nameArr[1];

      console.log(returnStr);

      return returnStr;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
