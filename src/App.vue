<template>
    <div id="app">
        <section class="hero is-warning is-bold">
            <div class="hero-body">
                <div class="container">
                    <h1 class="title">{{ $t('title') }}</h1>
                    <p class="subtitle" v-html="$t('descr')"></p>
                </div>
            </div>
        </section>

        <section class="section hero is-light">
            <div class="container">
                <div class="columns">
                    <div class="column is-one-third">
                        <div class="field">
                            <label><strong>{{ $t('shopSize') }}</strong></label>
                            <div class="control">
                                <label class="radio">
                                    <input type="radio" name="shopSize" data-value="10">
                                    {{ $t('sm') }}
                                </label>
                                <label class="radio">
                                    <input type="radio" name="shopSize" data-value="20" checked>
                                    {{ $t('md') }}
                                </label>
                                <label class="radio">
                                    <input type="radio" name="shopSize" data-value="30">
                                    {{ $t('lg') }}
                                </label>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="columns">
                    <div class="column is-one-third">
                        <div class="field">
                            <div class="control">
                                <label><strong>{{ $t('lvl') }}</strong></label>
                                <input class="input" type="number" placeholder="Average Level" value="1">
                            </div>
                        </div>
                    </div>

                    <div class="column is-one-third">
                        <div class="field">
                            <div class="control">
                                <label><strong>{{ $t('nbItems') }}</strong></label>
                                <input class="input" id="itemsNbValue" type="number" placeholder="Number of items" value="3">
                            </div>
                        </div>
                    </div>
                </div>  

                <div class="field">
                    <div class="control">
                        <input class="button is-dark is-rounded" 
                               type="submit" 
                               :value="$t('submit')" 
                               @click="randomizeMe()">
                    </div>
                </div>
            </div>
        </section>

        <section class="section">
            <div class="container">
                <table class="table is-bordered is-striped is-narrow is-hoverable is-fullwidth">
                    <thead>
                        <tr>
                            <th class="is-1 is-size-7 is-uppercase">{{ $t('colA') }}</th>
                            <th class="is-7 is-size-7 is-uppercase has-text-left">{{ $t('colB') }}</th>
                            <th class="is-1 is-size-7 is-uppercase">{{ $t('colC') }}</th>
                            <th class="is-1 is-size-7 is-uppercase">{{ $t('colD') }}</th>
                            <th class="is-1 is-size-7 is-uppercase">{{ $t('colE') }}</th>
                            <th class="is-1 is-size-7 is-uppercase">{{ $t('colF') }}</th>
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

        {{ info }}
    </div>
</template>

<script>
import $ from "jquery";
import {_} from 'vue-underscore';
import axios from "axios";
import allItems from "../public/items.json";

var items = [];

export default {
    name: "app",
    data () {
        return {
            info: null
        }
    },
    beforeMount () {
        items.push(allItems);
    },
    mounted () {
        const currentLang = $('html').attr('lang');

        if (!currentLang) {
            this.$i18n.locale = "en"
        } else {
            this.$i18n.locale = currentLang
        }
    },
    methods: {
        randomizeMe () {
            let giveMeItemsVal = $('#itemsNbValue').val();
            let index;
            let results = [];

            _.shuffle(items[0]);

            for (index = 0; index < giveMeItemsVal; index++) {
                results.push(items[0][index]);

                if (index === ( giveMeItemsVal - 1 )) {
                    console.log(results);
                }
            }
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
    title: "White Bear Shop"
    descr: "Welcome traveler!<br>I am <strong>Wiggens Raulnor</strong>, you are in my humble shop, in exchange of gold you can buy:"
    shopSize: "Size of the shop"
    sm: "Small"
    md: "Medium"
    lg: "Huge"
    lvl: "Average Level"
    nbItems: "Number of items"
    submit: "Generate"
    colA: "Category"
    colB: "Name"
    colC: "Qty"
    colD: "- Price"
    colE: "Price"
    colF: "+ Price"
fr:
    title: "La boutique de l'Ours Blanc"
    descr: "Bienvenue aventuriers !<br>Je suis <strong>Wiggens Raulnor</strong>, vous êtes dans ma modeste échoppe, contre votre or vous pouvez acheter :"
    shopSize: "Taille de la boutique"
    sm: "Petite"
    md: "Moyenne"
    lg: "Enorme"
    lvl: "Moyenne des niveaux"
    nbItems: "Nombre d'articles"
    submit: "Générer"
    colA: "Catégorie"
    colB: "Nom"
    colC: "Qté"
    colD: "Prix -"
    colE: "Prix"
    colF: "Prix +"
</i18n>
