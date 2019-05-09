<template>
  <div>
    <div class="m-b">
      <h1 class="m-a-0">Events</h1>
    </div>
    <div class="row item-list item-list-md item-list-li-by m-b">
      <div v-for="event in events" :key="event.id" class="col-md-12">
        <div class="item r">
          <div class="item-media">
            <a
              href="#"
              class="item-media-content"
              :style="{ 'background-image': `url(${event.thumb_url})` }"
            ></a>
          </div>
          <div class="item-info">
            <div class="item-title text-ellipsis">{{ event.name }}</div>
          </div>
        </div>
      </div>
    </div>
    <div>
      <b-pagination v-model="currentPage" :total-rows="count" :per-page="perPage" />
    </div>
  </div>
</template>

<script lang="ts">
import axios from 'axios';
import { Vue, Component, Prop } from 'vue-property-decorator';

import { Event, Events } from '../types';

@Component
export default class EventsPage extends Vue {
  @Prop({ default: 1 })
  private page!: number;

  @Prop({ default: 0 })
  private count!: number;

  @Prop({ default: [] })
  private events!: Events;

  @Prop({ default: 10 })
  private perPage!: number;

  private get currentPage(): number {
    return this.page;
  }

  private set currentPage(page: number) {
    this.page = page;

    this.getEvents();
  }

  private mounted(): void {
    this.getEvents();
  }

  private getEvents(): void {
    axios
      .get('/api/events', {
        params: {
          page: this.page,
          per_page: this.perPage
        }
      })
      .then(response => {
        this.count = response.data.count;
        this.events = response.data.results;
      });
  }
}
</script>

<style>
</style>
