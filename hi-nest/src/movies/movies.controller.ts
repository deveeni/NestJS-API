import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { CreateMovieDto } from 'src/dto/create-movie.dto';
import { Movie } from './entities/movie.entity';
import { MoviesService } from './movies.service';

@Controller('movies') //router
export class MoviesController {

    constructor(private readonly moviesServie: MoviesService){}

    @Get()
    getAll(): Movie[] {
        return this.moviesServie.getAll();
    }

    @Get(':id')
    getOne(@Param('id') movieId: number): Movie{
        return this.moviesServie.getOne(movieId);
    }

    @Post()
    create(@Body() movieData: CreateMovieDto){
        return this.moviesServie.create(movieData);
    }

    @Delete(':id')
    remove(@Param('id') movieId: number){
        return this.moviesServie.deleteOne(movieId);
    }

    @Patch(':id')
    patch(@Param('id') movieId: number, @Body() updateData){
        return this.moviesServie.update(movieId, updateData);
    }


    
}
