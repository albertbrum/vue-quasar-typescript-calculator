<template>
  <div>
    <p>{{ title }}</p>
    <div class="row justify-center">
      <div class="col-12 col-md-8">
        <q-card>
          <q-card-section class="bg-primary">
            <div class="text-white text-h6">Calculadora</div>
          </q-card-section>
          <q-card-section>
            <div class="text-h5 text-grey-5 text-right">
              sentença da expressao numerica
            </div>
            <div class="text-h3 text-right">resultado</div>
          </q-card-section>
          <q-card-section class="bg-grey-4">
            <div class="row q-col-gutter-sm">
              <div class="col-3">
                <q-btn class="full-width text-h6"> 1 </q-btn>
              </div>
              <div class="col-6">
                <q-btn class="full-width text-h6" color="indigo"> CE </q-btn>
              </div>
              <div class="col-6">
                <q-btn class="full-width text-h6" color="orange"> = </q-btn>
              </div>
            </div>
          </q-card-section>
        </q-card>
      </div>
    </div>
    <div>
      <ul>
        <li v-for="todo in todos" :key="todo.id" @click="increment">
          {{ todo.id }} - {{ todo.content }}
        </li>
      </ul>
      <p>Count: {{ todoCount }} / {{ meta.totalCount }}</p>
      <p>Active: {{ active ? 'yes' : 'no' }}</p>
      <p>Clicks on todos: {{ clickCount }}</p>
    </div>
    <p>Count: {{ todoCount }} / {{ meta.totalCount }}</p>
    <p>Active: {{ active ? 'yes' : 'no' }}</p>
    <p>Clicks on todos: {{ clickCount }}</p>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { Todo, Meta } from './models';

interface Props {
  title: string;
  todos?: Todo[];
  meta: Meta;
  active: boolean;
}
const props = withDefaults(defineProps<Props>(), {
  todos: () => [],
});

const clickCount = ref(0);
function increment() {
  clickCount.value += 1;
  return clickCount.value;
}

const todoCount = computed(() => props.todos.length);
</script>
