<template>
  <div id="app">
        <section class="hero is-warning is-bold">
            <div class="hero-body">
                <div class="container">
                    <h1 class="title">
                        White Bear Shop
                    </h1>
                    <p class="subtitle">
                        Welcome traveler!<br>
                        I am <strong>Wiggens Raulnor</strong>, you are in my humble shop, in exchange of gold you can buy:
                    </p>
                </div>
            </div>
        </section>

        <section class="section hero is-light">
            <div class="container">
                <div class="columns">
                    <div class="column is-one-third">
                        <div class="field">
                            <label><strong>Size of the shop</strong></label>
                            <div class="control">
                                <label class="radio">
                                    <input type="radio" name="shopSize">
                                    Small
                                </label>
                                <label class="radio">
                                    <input type="radio" name="shopSize" checked>
                                    Normal
                                </label>
                                <label class="radio">
                                    <input type="radio" name="shopSize">
                                    Huge
                                </label>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="columns">
                    <div class="column is-one-third">
                        <div class="field">
                            <div class="control">
                                <label><strong>Average Level</strong></label>
                                <input class="input" type="number" placeholder="Average Level" value="1">
                            </div>
                        </div>
                    </div>

                    <div class="column is-one-third">
                        <div class="field">
                            <div class="control">
                                <label><strong>Number of items</strong></label>
                                <input class="input" type="number" placeholder="Number of items" value="20">
                            </div>
                        </div>
                    </div>
                </div>  

                <div class="field">
                    <div class="control">
                        <input class="button is-dark is-rounded" type="submit" value="Generate">
                    </div>
                </div>
            </div>
        </section>

        <section class="section">
            <div class="container">
                <table class="table is-bordered is-striped is-narrow is-hoverable is-fullwidth">
                    <thead>
                        <tr>
                            <th>Category</th>
                            <th>Name</th>
                            <th>Qty</th>
                            <th>Lower Price</th>
                            <th>Medium Price</th>
                            <th>Higher Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Common</td>
                            <td>Iron Arrows</td>
                            <td>20</td>
                            <td>8 pc</td>
                            <td>10 pc</td>
                            <td>14 pc</td>
                        </tr>
                        <tr>
                            <td class="has-background-grey-lighter">Rare</td>
                            <td>
                                Elixir of Health <span class="has-text-grey">- Potion</span><br>
                                <span class="is-size-7">Lorsque vous buvez cette potion, elle guérit de toute maladie qui vous afflige, et supprime les conditions aveuglé, assourdi, paralysé et empoisonné. Le liquide rouge clair possède de minuscules bulles de lumière.</span>
                            </td>
                            <td>1</td>
                            <td>500 pa</td>
                            <td>575 pa</td>
                            <td>685 pa</td>
                        </tr>
                        <tr>
                            <td class="has-background-warning">Unique</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
    };
  }
};
</script>

<style lang="scss">
</style>
