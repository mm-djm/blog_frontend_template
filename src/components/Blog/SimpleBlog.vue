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
    
    <v-breadcrumbs :items="items">
      <template v-slot:divider>
        <v-icon>mdi-chevron-right</v-icon>
      </template>
    </v-breadcrumbs>
  </div>
        <v-col></v-col>
        <v-card
            color="#FFFFFF"
            :outlined=true
        >
            <div class="pa-2">
                <div>
                    <v-card-text class="headline font-weight-bold" v-html="blog.name"></v-card-text>
                </div>
                <div>
                    <v-card-subtitle class="pb-0" v-html="blog.date"></v-card-subtitle>
                </div>
                <div>
                    <v-card-actions>
                        <v-chip
                            v-for="(t, i) in blog.tag"
                            :key="i"
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
                <v-card-actions><v-divider></v-divider></v-card-actions>
                <div class="content">
                    <v-card-text class="markdown-body" v-html="markdownSimpleToHtml"></v-card-text>
                </div>
            </div>
        </v-card>
    </v-container>
</template>

<script>
import MarkdownIt from 'markdown-it';
import mkhljs from 'markdown-it-highlightjs';
import hljs from 'highlight.js'
import 'github-markdown-css/github-markdown-light.css';
import 'highlight.js/styles/github.css';

export default ({
    data: () => ({
      id: "",
      blog: {
        content:"",
        name:"test"
      },
      alert: false,
      retcode: 0,
      error: "",
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
        },
        {
          text: 'test',
          disabled: false,
          href: this.id,
        }
      ]
    }),
    created(){
        this.id=this.$route.params.id;
        this.$http({
        url:'',
        headers:{'Content-Type': 'application/json'},
        method: 'POST',
        body: {
            "Action":"DescribeSimpleBlog",
            "article_id": this.id
      }
      })
      .then(response => {
        if (response.status=="200") {
          console.log(response.data);
          if (response.body.RetCode!=0) {
            this.retcode=response.body.RetCode
            this.error=response.body.Error
            this.alert=true
          }else{
            this.blog=response.body.dataSet;
            this.alert=false;
            document.title=this.blog.name;
            this.items[2].text=this.blog.name;
            this.items[2].href="/#/blog/detail/"+this.id;
          }
        }
      })
      .catch(function(error) {
        console.log(error);
      })
    },
    computed: {
      markdownSimpleToHtml() {
        const md = new MarkdownIt({
          linkify: true,
          typographer: true,
          highlight: function (str, lang) {
            const code = hljs.highlight(lang, str, true).value;
            return code;
          },
        });
        const content = md.use(mkhljs).render(this.blog.content);
        return content;
      }
    }
})
</script>
