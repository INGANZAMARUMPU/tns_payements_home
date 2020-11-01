<template>
    <Page>
        <ActionBar title="Welcome to NativeScript-Vue!"/>
        <StackLayout>
            <!-- <Navigator :defaultRoute="'/home'"/> -->
            <StackLayout orientation="horizontal">
                <Label class="message" text="Hello " />
                <Label class="message" :text="msg" />
            </StackLayout>
            <Button text="Button" @tap="gotoPage2" />
        </StackLayout>
    </Page>
</template>

<script >
const page2 = require("./Page2");
  export default {
    data() {
      return {
        msg: "Jonkur",
      }
  },
    methods: {
        gotoPage2() {
            prompt("Your name please!").
                then(result => this.msg=result.text);
            // this.$navigateTo(page2)
        }
    }
};
</script>

<style scoped>
    ActionBar {
        background-color: #53ba82;
        color: #ffffff;
    }
    .message {
        vertical-align: center;
        text-align: center;
        font-size: 20;
        color: #333333;
    }
</style>
