import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';

@Controller('movies') //router
export class MoviesController {
    @Get()
    getAll() {
        return 'This will return all movies';
    }

    @Get('search')
    search(@Query('year') searchingYear: string){
        return `We are searching for a movie made after : ${searchingYear} `;
    }

    @Get('/:id')
    getOne(@Param('id') movieId: string){
        return `This will return one movie : ${movieId}`;
    }

    @Post()
    create(@Body() movieData){
        console.log("movieData : ", movieData)
        return movieData;
    }

    @Delete('/:id')
    remove(@Param('id') movieId: string){
        return `This will delete a movie : ${movieId}`;
    }

    @Patch('/:id')
    patch(@Param('id') movieId: string, @Body() updateData){
        return {
            updatedMovie: movieId,
            ...updateData,
        };
    }


    
}
