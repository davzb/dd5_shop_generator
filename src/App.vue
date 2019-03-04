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
                                    <input type="radio" name="shopSize" data-size="sm" checked>
                                    {{ $t('sm') }}
                                </label>
                                <label class="radio">
                                    <input type="radio" name="shopSize" data-size="md">
                                    {{ $t('md') }}
                                </label>
                                <label class="radio">
                                    <input type="radio" name="shopSize" data-size="lg">
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
                                <input class="input" type="number" :placeholder="$t('lvl')" value="1">
                            </div>
                        </div>
                    </div>

                    <div class="column is-one-third">
                        <div class="field">
                            <div class="control">
                                <label><strong>{{ $t('nbItems') }}</strong></label>
                                <input class="input" 
                                       id="itemsNbValue" 
                                       type="number" 
                                       :placeholder="$t('nbItems')" 
                                       value="10">
                            </div>
                        </div>
                    </div>
                </div>  

                <div class="field">
                    <div class="control">
                        <input class="button is-dark is-rounded" 
                               type="submit" 
                               :value="$t('submit')" 
                               @click="randomizeMe()"
                               :model="generate">
                    </div>
                </div>
            </div>
        </section>

        <section class="section">
            <div class="container">
                <table class="table is-bordered is-striped is-narrow is-hoverable is-fullwidth" v-if="results">
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
                        <tr v-for="result in results" :key="result.id">
                            <td>{{ result.id }}</td>
                            <td class="has-text-left">{{ result.name }}</td>
                            <td>{{ result.qty }}</td>
                            <td>{{ Math.floor(result.price * 0.6) }} {{ result.currency }}</td>
                            <td>{{ result.price }} {{ result.currency }}</td>
                            <td>{{ Math.round(result.price * 1.5) }} {{ result.currency }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
    </div>
</template>

<script>
import $ from "jquery";
import {_} from 'vue-underscore';
import axios from "axios";
import allArmes from "../public/armes.json";
import allBabioles from "../public/babioles.json";
import allEquipements from "../public/equipements.json";
import allMarchandises from "../public/marchandises.json";
import allOutils from "../public/outils.json";

var armes = [];
var babioles = [];
var equipements = [];
var marchandises = [];
var outils = [];

export default {
    name: "app",
    data () {
        return {
            generate: null,
            info: null,
            results: []
        }
    },
    beforeMount () {
        armes.push(allArmes);
        babioles.push(allBabioles);
        equipements.push(allEquipements);
        marchandises.push(allMarchandises);
        outils.push(allOutils);
    },
    mounted () {
        const currentLang = $('html').attr('lang');

        if (!currentLang) {
            this.$i18n.locale = "en"
        } else {
            this.$i18n.locale = currentLang
        }
    },
    watch : {
        generate : function () {
            this.randomizeMe();
        }
    },
    methods: {
        randomizeMe () {
            let checkedShopSize = $('.radio input:checked').data('size');
            let giveMeItemsVal = $('#itemsNbValue').val();
            let armesPercent, babiolesPercent, equipementsPercent, marchandisesPercent, outilsPercent;
            let resultsArmes, resultsBabioles, resultsEquipements, resultsMarchandises, resultsOutils;

            switch (checkedShopSize) {
                case 'sm' :
                armesPercent = 0;
                outilsPercent = 0;
                babiolesPercent = Math.round(giveMeItemsVal * 0.2);
                equipementsPercent = Math.round(giveMeItemsVal * 0.4);
                marchandisesPercent = Math.floor(giveMeItemsVal * 0.4);

                resultsBabioles = _.sample(babioles[0], babiolesPercent);
                resultsEquipements = _.sample(equipements[0], equipementsPercent);
                resultsMarchandises = _.sample(marchandises[0], marchandisesPercent);

                this.$data.results = _.union(resultsBabioles, 
                                  resultsEquipements, 
                                  resultsMarchandises);
                this.$data.results = _.shuffle(this.$data.results);
                break

                case 'md' :
                armesPercent = Math.round(giveMeItemsVal * 0.2);
                outilsPercent = Math.round(giveMeItemsVal * 0.1);
                babiolesPercent = Math.round(giveMeItemsVal * 0.1);
                equipementsPercent = Math.round(giveMeItemsVal * 0.3);
                marchandisesPercent = Math.floor(giveMeItemsVal * 0.4);

                resultsArmes = _.sample(armes[0], armesPercent);
                resultsOutils = _.sample(outils[0], outilsPercent);
                resultsBabioles = _.sample(babioles[0], babiolesPercent);
                resultsEquipements = _.sample(equipements[0], equipementsPercent);
                resultsMarchandises = _.sample(marchandises[0], marchandisesPercent);

                this.$data.results = _.union(resultsArmes, 
                                  resultsOutils, 
                                  resultsBabioles, 
                                  resultsEquipements, 
                                  resultsMarchandises);
                this.$data.results = _.shuffle(this.$data.results);
                break

                case 'lg' :
                armesPercent = Math.round(giveMeItemsVal * 0.3);
                outilsPercent = Math.round(giveMeItemsVal * 0.2);
                babiolesPercent = 0;
                equipementsPercent = Math.round(giveMeItemsVal * 0.3);
                marchandisesPercent = Math.floor(giveMeItemsVal * 0.2);

                resultsArmes = _.sample(armes[0], armesPercent);
                resultsOutils = _.sample(outils[0], outilsPercent);
                resultsEquipements = _.sample(equipements[0], equipementsPercent);
                resultsMarchandises = _.sample(marchandises[0], marchandisesPercent);

                this.$data.results = _.union(resultsArmes, 
                                  resultsOutils, 
                                  resultsEquipements, 
                                  resultsMarchandises);
                this.$data.results = _.shuffle(this.$data.results);
                break
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
