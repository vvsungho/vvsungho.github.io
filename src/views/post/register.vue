<template>
  <div style="padding: 2rem">
    <b-card-title class="text-left">Editor</b-card-title>
    <editor
        :initialValue="editorText"
        :options="editorOptions"
        height="auto"
        initialEditType="wysiwyg"
        previewStyle="vertical"
        ref="toastuiEditor"
    />
    <!--    @change="getHtml"-->

    <div style="margin-top: 1rem" class="text-right">
      <b-button variant="primary" size="sm" @click="getHtml">HTML TO TEXT</b-button>
    </div>

    <div>
      <b-card-title class="text-left" style="margin-top: 1rem">Text</b-card-title>
      <b-card style="margin-top: 1rem; overflow-y: auto">
        <div class="text-left" v-html="htmlText" style="height: 300px" />
      </b-card>
    </div>
  </div>
</template>
<script>
import 'codemirror/lib/codemirror.css';
import '@toast-ui/editor/dist/toastui-editor.css';

import { Editor } from '@toast-ui/vue-editor';

export default {
  components: {
    editor: Editor
  },
  data() {
    return {
      editorText: '텍스트를 입력하세요.',
      editorOptions: {
        hideModeSwitch: true
      },
      htmlText: '텍스트를 입력하세요.'
    };
  },
  methods: {
    getHtml() {
      this.htmlText = this.$refs.toastuiEditor.invoke('getHtml');
    }
  }
};
</script>

<style>
  .tui-editor-defaultUI {
    text-align: left !important;
  }
</style>
