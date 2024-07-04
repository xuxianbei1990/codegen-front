<template>
  <el-button :plain="true" @click="open2">Success</el-button>
  <el-button :plain="true" @click="connectToWebSocket">connet</el-button>
  <el-button :plain="true" @click="sendMessageToServer">send</el-button>
  <el-button :plain="true" @click="disconnet">disconnet</el-button>
  <el-input v-model="input" style="width: 240px" placeholder="Please input" />
</template>

<script lang="ts" setup>
import {ElMessage} from 'element-plus'
import {ref, onMounted, onUnmounted} from 'vue'

const ws = ref(null);
const input = ref('')


const connect = (url) => {
  ws.value = new WebSocket(url);
  ws.value.onopen = () => {
    console.log('WebSocket connected');
  };
  ws.value.onmessage = (event) => {
    input.value = event.data;
  }

  ws.value.onerror = (error) => {
    console.log('WebSocket error:', error);
  };

}

onMounted(() => {
  connect('ws://localhost:8001/ws');
});

const connectToWebSocket = () => {
  connect('ws://localhost:7303/ws');

}


const disconnet = () => {
  if (ws.value) {
    ws.value.close();
  }
}

onUnmounted(() => {
  if (ws.value) {
    ws.value.close();
  }

});
const open2 = () => {
  ElMessage({
    message: 'Congrats, this is a success message.',
    type: 'success',
  })
}

const sendMessageToServer = () => {
  if (ws.value && ws.value.readyState === WebSocket.OPEN) {
    // 发送消息，这里以发送字符串为例
    ws.value.send('Hello, Server!');
  } else {
    console.log('WebSocket is not connected.');
  }
};

</script>
