<template>
    <div id="app">
        <section class="hero is-warning is-bold">
            <div class="hero-body">
                <div class="container">
                    <h1 class="title">{{ $t('title') }}</h1>
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
                                    <input type="radio" name="shopSize" data-value="10">
                                    Small
                                </label>
                                <label class="radio">
                                    <input type="radio" name="shopSize" data-value="20" checked>
                                    Normal
                                </label>
                                <label class="radio">
                                    <input type="radio" name="shopSize" data-value="30">
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
                            <th class="is-1 is-size-7 is-uppercase">Category</th>
                            <th class="is-7 is-size-7 is-uppercase has-text-left">Name</th>
                            <th class="is-1 is-size-7 is-uppercase">Qty</th>
                            <th class="is-1 is-size-7 is-uppercase">Lower Price</th>
                            <th class="is-1 is-size-7 is-uppercase">Medium Price</th>
                            <th class="is-1 is-size-7 is-uppercase">Higher Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Common</td>
                            <td class="has-text-left">Iron Arrows</td>
                            <td>20</td>
                            <td>8 pc</td>
                            <td>10 pc</td>
                            <td>14 pc</td>
                        </tr>
                        <tr>
                            <td class="has-background-grey-lighter">Rare</td>
                            <td class="has-text-left">
                                Elixir of Health <span class="has-text-grey is-italic">- Potion</span><br>
                                <span class="is-size-7">Lorsque vous buvez cette potion, elle guérit de toute maladie qui vous afflige, et supprime les conditions aveuglé, assourdi, paralysé et empoisonné. Le liquide rouge clair possède de minuscules bulles de lumière.</span>
                            </td>
                            <td>1</td>
                            <td>500 pa</td>
                            <td>575 pa</td>
                            <td>685 pa</td>
                        </tr>
                        <tr>
                            <td class="has-background-warning">Unique</td>
                            <td class="has-text-left"></td>
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
import $ from "jquery";

export default {
  name: "app",
  data() {
        return {
            locale: 'en'
        }
  },
  watch: {
    locale (val) {
        this.$i18n.locale = val
    }
  }
};
</script>

<style lang="scss">
    .table {
        tr {
            td, th { 
                text-align: center;
                vertical-align: middle;

                &.is-1 { width: 8.33333%; }
                &.is-7 { width: 58.33333%; }
            }
        }
    }
</style>

<i18n>
en:
    title: White Bear Shop
fr:
    title: La boutique de l'Ours Blanc
</i18n>
