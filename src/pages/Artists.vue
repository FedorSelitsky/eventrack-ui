<template>
  <div>
    <div class="m-b">
      <h1 class="m-a-0">Artists</h1>
    </div>
    <div class="row row-lg">
      <div v-for="artist in artists" :key="artist.id" class="col-xs-4 col-sm-4 col-md-3">
        <div class="item">
          <div class="item-media rounded">
            <router-link
              :to="{ name: 'artist', params: { id: artist.id }}"
              :style="{ 'background-image': `url(${artist.thumb_url})` }"
              class="item-media-content"
            ></router-link>
          </div>
          <div class="item-info text-center">
            <div class="item-title text-ellipsis">
              <router-link :to="{ name: 'artist', params: { id: artist.id }}">
                {{ artist.name }}
                </router-link>
            </div>
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

import { Artist, Artists } from '../types';

@Component
export default class ArtistsPage extends Vue {
  @Prop({ default: 1 })
  private page!: number;

  @Prop({ default: 0 })
  private count!: number;

  @Prop({ default: [] })
  private artists!: Artists;

  @Prop({ default: 8 })
  private perPage!: number;

  private get currentPage(): number {
    return this.page;
  }

  private set currentPage(page: number) {
    this.page = page;

    this.getArtists();
  }

  private mounted(): void {
    this.getArtists();
  }

  private getArtists(): void {
    axios
      .get('/api/artists', {
        params: {
          page: this.page,
          per_page: this.perPage
        }
      })
      .then(response => {
        this.count = response.data.count;
        this.artists = response.data.results;
      });
  }
}
</script>

<style>
</style>
