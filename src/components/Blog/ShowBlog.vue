<template>
    <v-container>
    <div>
    <v-alert
      v-model="alert"
      type="error"
      border="left"
      close-text="Close Alert"
      dark
      dismissible
    >
      Error:{{ error }};  Retcode:{{ retcode }}
    </v-alert>
  </div>
        <v-breadcrumbs :items="items">
          <template v-slot:divider>
            <v-icon>mdi-chevron-right</v-icon>
          </template>
        </v-breadcrumbs>
        
        <v-row justify="center" align="center" v-if="blogs.length==0">
          <div class="text-center ma-12">
            <v-progress-circular
              :size="70"
              :width="7"
              color="#4A148C"
              indeterminate
              class
            ></v-progress-circular>
          </div>
        </v-row>
        
        <v-col></v-col>
        <v-row dense>
            <v-col
                v-for="(blog, i) in blogs"
                :key="i"
                cols="12"
            >
                <v-card
                    color="#eee"
                >
                    <div class="pa-3">
                        <div>
                            <v-card-text class="headline font-weight-bold" v-html="blog.name"></v-card-text>
                            <v-card-subtitle v-html="blog.date"></v-card-subtitle>
                            <v-divider></v-divider>
                            <v-card-text class="grey--text font-italic" v-html="blog.abstract"></v-card-text>
                            <v-card-actions>
                            <v-btn
                              text
                              color="deep-purple accent-4"
                              v-bind:to="'/blog/detail/'+blog.id"
                            >
                              Read More
                            </v-btn>
                            <v-spacer></v-spacer>
                            <v-chip
                              v-for="(t, j) in blog.tag"
                              :key="j"
                              class="ma-2"
                              color="#4A148C"
                              label
                              text-color="white"
                            >
                            <v-icon left>mdi-label</v-icon>
                              {{ t }}
                            </v-chip>
                            </v-card-actions>
                        </div>
                    </div>
                </v-card>
            </v-col>
        </v-row>
        
        <v-col></v-col>
        
        <div class="text-center">
            <v-pagination
                v-if="blogs.length>0"
                v-model="page"
                :length="itemLength"
                :total-visible="5"
            ></v-pagination>
        </div>
    </v-container>
</template>


<script>
  export default {
    data: () => ({
      blogs: [],
      alert: false,
      retcode: 0,
      error: "",
      page:1,
      itemLength:1,
      size: 10,
      items: [
        {
          text: 'Home',
          disabled: false,
          href: '/',
        },
        {
          text: 'Blog',
          disabled: false,
          href: '/#/blog',
        }
      ]
    }),
    created(){
      this.$http({
      url:'',
      headers:{'Content-Type': 'application/json'},
      method: 'POST',
      body: {
        "Action":"DescribeBlog"
      }
      })
      .then(response => {
        if (response.status=="200") {
          console.log(response.data);
          if (response.body.RetCode!=0) {
            this.retcode=response.body.RetCode;
            this.error=response.body.Error;
            this.alert=true;
          }else{
            this.blogs=response.body.dataSet;
            this.alert=false;
            this.itemLength = Math.ceil(this.blogs.length/this.size);
          }
        }
      })
      .catch(function(error) {
        console.log(error);
      })
    },
    methods: {
      getBlogData() {
        return this.blogs.slice((this.page-1)*this.size,this.page*this.size);;
      }
    }
  }
</script>

<style scoped>
.v-progress-circular {
  margin: 1rem;
}
</style>