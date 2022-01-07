<template>
<v-app>
    <v-main>
        <div class="home">
            <!-- <v-toolbar class="mt-5" flat>
            <v-toolbar-title>
                <span class="caption">Overview Dashboard></span><br>Tranding View
            </v-toolbar-title>
            <v-app-bar flat color="rgba(0,0,0,0)" class="ml-16">
                <v-tabs v-model="tab" color="purple" slider-size="3">
                <v-tab>
                    <v-btn fab color="purpe lighten-4" elevation="0">
                    <v-icon color="purple">fab fa-bitcoin</v-icon>
                    </v-btn>
                </v-tab>
                <v-tab>
                    <v-btn fab color="red lighten-4" elevation="0">
                    <v-icon color="red">fas fa-rupee-sign</v-icon>
                    </v-btn>
                </v-tab>
                <v-tab>
                    <v-btn fab color="blue lighten-4" elevation="0">
                    <v-icon color="green">fas fa-yen-sign</v-icon>
                    </v-btn>
                </v-tab>
                <v-tab>
                    <v-btn fab color="grey lighten-4" elevation="0">
                    <v-icon color="grey">fas fa-chevron-right</v-icon>
                    </v-btn>
                </v-tab>
                </v-tabs>
            </v-app-bar>
            <v-spacer></v-spacer>
            <v-btn icon>
                <v-icon>far fa-bell</v-icon>
            </v-btn>
            <v-badge bordered bottom color="green" dot offset-x="10" offset-y="10">
                <v-avatar size="40">
                <v-img src="https://cdn.vuetifyjs.com/images/lists/2.jpg"></v-img>
                </v-avatar>
            </v-badge>
            </v-toolbar>
            <v-divider></v-divider> -->
            <v-container fluid>
                <h1>Dashboard</h1>  
                <br>
                <v-row>
                    <v-col cols="12" sm="2" v-for="card in cards"
                            :key="card.title">
                            <v-hover v-slot="{ hover }" open-delay="200">
                            <v-card :elevation="hover ? 16 : 2">
                                <v-row>
                                    <v-col cols="12" sm="12">
                                    <v-list-item>
                                        <v-list-item-content>
                                        <div style="text-align:right">
                                            <v-btn class="icon" fab width="24" height="24" elevation="0">
                                            <v-icon size="16" color="white" v-text="card.icon"></v-icon>
                                            </v-btn>
                                        </div>
                                        <v-list-item-subtitle v-text="card.title" ></v-list-item-subtitle>
                                        <v-list-item-title v-text="card.total" class="headline mb-1 ">
                                            
                                        </v-list-item-title>
                                        </v-list-item-content>
                                    </v-list-item>
                                    </v-col>
                                </v-row>
                            </v-card>
                            </v-hover>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="12" sm="9">
                    <v-card>
                        <v-app-bar flat color="rgba(0,0,0,0)">
                        <v-toolbar-title class="title black--text pl-0 ml-2">
                            Candidate Overview 
                        </v-toolbar-title>
                        <v-spacer></v-spacer>
                        <v-btn color="deep-purple" class="white--text mr-2">Weekly</v-btn>
                        <v-btn color="deep-purple lighten-4" class="deep-purple--text ">Monthly</v-btn>
                        </v-app-bar>
                        <v-sparkline
                            :fill="fill"
                            :line-width="width"
                            :padding="padding"
                            :smooth="radius || false"
                            :value="value"
                            auto-draw
                            color="deep-purple">
                        </v-sparkline>
                    </v-card>
                    </v-col>
                    <v-col cols="12" sm="3">
                        <v-card>
                            <GChart
                                type="PieChart"
                                :data="chartData"
                                :options="chartOptions"
                                :resizeDebounce="700"
                            />
                        </v-card>
                    </v-col>
                </v-row>
                <!-- <v-col cols="12" sm="6">
                <v-card height="180px">
                    <v-row>
                    <v-col cols="12" sm="4">
                        <v-list-item three-line>
                        <v-list-item-content>
                            <div class="mb-4">Bitcoin</div>
                            <v-list-item-title class="headline mb-1 black--text">
                            2.5578 BTC
                            </v-list-item-title>
                            <v-list-item-subtitle class="grey--text">$2500 USD</v-list-item-subtitle>
                        </v-list-item-content>
                        </v-list-item>
                    </v-col>
                    <v-col cols="12" sm="8">
                        <v-sparkline
                        :value="value"
                        :smooth="radius || false"
                        :padding="padding"
                        :line-width="width"
                        :stroke-linecap="lineCap"
                        :fill="fills"
                        :type="type"
                        :auto-line-width="autoLineWidth"
                        auto-draw
                        color="red"
                        >

                        </v-sparkline>
                        <v-card-actions class="justify-end">
                        <v-btn text color="green">
                            <v-icon class="mt-n2 pr-2">fas fa-sort-down</v-icon> 8.5
                        </v-btn>
                        </v-card-actions>
                    </v-col>
                    </v-row>
                </v-card>
                </v-col> -->
                <v-row>
                    <v-col cols="12" sm="12">
                        <v-card>
                            <v-row>
                                <v-col cols="12" sm="8" class="border">
                                    <v-list-item>
                                    <v-list-item-content>
                                        <div class="mb-4">Need vs Met</div>
                                        <v-row>
                                            <v-col cols="12" sm="3">
                                                <v-progress-circular
                                                rotate="360"
                                                size="150"
                                                width="15"
                                                value="50"
                                                color="indigo darken-4"
                                                style="text-align:center"
                                                >
                                                50%
                                                <br>
                                                Backend
                                                </v-progress-circular>
                                            </v-col>
                                            <v-col cols="12" sm="3">
                                                <v-progress-circular
                                                rotate="360"
                                                size="150"
                                                width="15"
                                                value="25"
                                                color="indigo darken-4"
                                                style="text-align:center"
                                                >
                                                25%
                                                <br>
                                                Marketing
                                                </v-progress-circular>
                                            </v-col>
                                            <v-col cols="12" sm="3">
                                                <v-progress-circular
                                                rotate="360"
                                                size="150"
                                                width="15"
                                                value="75"
                                                color="indigo darken-4"
                                                style="text-align:center"
                                                >
                                                75%
                                                <br>
                                                Frontend
                                                </v-progress-circular>
                                            </v-col>
                                            <v-col cols="12" sm="3">
                                                <v-progress-circular
                                                rotate="360"
                                                size="150"
                                                width="15"
                                                value="100"
                                                color="indigo darken-4"
                                                style="text-align:center"
                                                >
                                                100%
                                                <br>
                                                Data Analyst
                                                </v-progress-circular>
                                            </v-col>
                                        </v-row>
                                    </v-list-item-content>
                                    </v-list-item>
                                </v-col>
                                <v-sol cols="12" sm="4" >
                                    <v-list-item>
                                    <v-list-item-content>
                                        <div style="text-align:right">Your Portfolio</div>
                                        <v-row>
                                            <v-col cols="12" sm="12">
                                                <v-progress-circular
                                                rotate="360"
                                                size="100"
                                                width="15"
                                                value="70"
                                                color="teal"
                                                >
                                                70%
                                                </v-progress-circular>
                                            </v-col>
                                        </v-row>
                                    </v-list-item-content>
                                    </v-list-item>
                                </v-sol>
                            </v-row>
                        </v-card>
                    </v-col>
                </v-row>
            </v-container>
        </div>
  </v-main>
</v-app>
</template>

<script>
import { GChart } from 'vue-google-charts'
export default {
    components: {
    GChart
  },
    
  name: 'Home',
  data: () => ({
      cards: [
            { title: 'All Candidate', total: '120', icon: 'mdi-account-multiple-outline',  },
            { title: 'New Candidate', total: '40', icon: 'mdi-account',  },
            { title: 'OnProgress', total: '25', icon: 'mdi-chart-line-variant',  },
            { title: 'Pending', total: '47', icon: 'mdi-alert',  },
            { title: 'Not Met', total: '15', icon: 'mdi-close-box',  },
            { title: 'Completed', total: '92', icon: 'mdi-checkbox-outline',  },
        ],
      chartData: [
        ['Year', 'Sales', 'Expenses', 'Profit'],
        ['2014', 1000, 400, 200],
        ['2015', 1170, 460, 250],
        ['2016', 660, 1120, 300],
        ['2017', 1030, 540, 350]
      ],
      chartOptions: {
        chart: {
          title: 'Company Performance',
          subtitle: 'Sales, Expenses, and Profit: 2014-2017',
        }
      },
     tab: null,
     text: 'center',
     fill: true,
      padding: 8,
      radius: 10,
      value: [0, 2, 5, 9, 5, 10, 3, 5, 0, 0, 1, 8, 2, 9, 0],
      width: 2,
      lineCap: 'round',
      type: 'trend',
      autoLineWidth: false,
      fills: false,
  })
}
</script>
<style lang="sass" scoped>
.v-card.on-hover.theme--dark
  background-color: rgba(#FFF, 0.8)
  >.v-card__text
    color: #000
</style>
<style scoped>
.border {
  border-right: 1px solid grey
}
.icon{
  background: linear-gradient(128.58deg, #0F123F 14.67%, #3A408F 86.8%);

}
</style>