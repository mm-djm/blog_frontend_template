<template>
    <v-container>
        <v-col></v-col>
        <v-col></v-col>
        <v-col></v-col>
        <v-list-item-group class="text-center mr-16 ml-16">
            <v-list-item-title class="headline font-weight-bold">
                Name
            </v-list-item-title>
            <v-list-item-subtitle class="purple--text">
                Position
            </v-list-item-subtitle>
            <v-list-item-content class="font-weight-light">
                Content
            </v-list-item-content>
            <v-col></v-col>
            <div class="text-center">
                <v-btn
                    v-for="(item,i) in items"
                    :key=i
                    :href="item.path"
                    class="mx-2"
                    target="_blank"
                    color="black"
                    icon
                >
                    <v-icon size="30px" color="purple">{{ item.icon }}</v-icon>
                </v-btn>
            </div>
            <v-col></v-col>
            <div>
                <v-btn
                    href=""
                    color="purple"
                    class="white--text"
                    target="_blank"
                >
                    Review My CV
                    <v-icon right dark>mdi-cloud-download</v-icon>
                </v-btn>
            </div>
        </v-list-item-group>
    </v-container>
</template>

<script>
export default {
    data: () => ({
    items:[
      {
        path:'',
        icon:'mdi-github',
      },
      {
        path:'',
        icon:'mdi-linkedin',
      },
      {
        path:"",
        icon:'mdi-email',
      }
    ],
  })
}
</script>