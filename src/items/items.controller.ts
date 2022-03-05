import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { get } from 'https';
import { CreateItemDto } from './dto/create-item.dto';
import { ItemsService } from './items.service';
import { Item } from './interfaces/item.interface';

@Controller('items')
export class ItemsController {
  // before you can use the ItemsService you must inject it first ad a dependence

  constructor(private readonly itemsService: ItemsService) {}
  // to get all items.
  @Get()
  findAll(): Promise<Item[]> {
    return this.itemsService.findAll();
  }

  // find item by id (( to be changed using Service ))
  @Get(':id')
  findOne(@Param('id') id): Promise<Item> {
    return this.itemsService.findOne(id);
  }

  // post request to make an item (( to be changed using Service ))
  @Post()
  create(@Body() createItemDto: CreateItemDto): Promise<Item> {
    return this.itemsService.create(createItemDto);
  }

  // delete item by id (( the id comes from the URL ))
  @Delete(':id')
  delete(@Param('id') id): Promise<Item> {
    return this.itemsService.delete(id);
  }

  // add an item with data item id and description
  @Put(':id')
  update(@Body() updateItemDto: CreateItemDto, @Param('id') id): Promise<Item> {
    return this.itemsService.update(id, updateItemDto);
  }
}
