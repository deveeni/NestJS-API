import { Module } from '@nestjs/common';
import { MoviesController } from './movies/movies.controller';

@Module({
  imports: [],
  controllers: [MoviesController], //Take URL and execute function.
  providers: [],
})
export class AppModule {}
