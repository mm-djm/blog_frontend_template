<template>
    <v-container>
    <div>
    <v-breadcrumbs :items="items">
      <template v-slot:divider>
        <v-icon>mdi-chevron-right</v-icon>
      </template>
    </v-breadcrumbs>
  </div>
        <v-col></v-col>
        
    </v-container>
</template>

<script>
export default ({
    data: () => ({
      items: [
        {
          text: 'Home',
          disabled: false,
          href: '/',
        },
        {
          text: 'About',
          disabled: false,
          href: '/#/about',
        }
      ]
    }),
})
</script>
