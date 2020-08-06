/* eslint-disable @typescript-eslint/no-unused-vars */
import { Controller, Get, Post, Body,Param } from '@nestjs/common';
import { ApiTags, ApiResponse, ApiOperation, ApiBody, ApiParam, ApiNotFoundResponse } from '@nestjs/swagger';
import { PathologyService } from './pathology.service';
import { PathologyDTO } from './dto/pathologyDTO';

@Controller('pathology')
@ApiTags('Pathology')
export class PathologyController {
  constructor(private pathologyService: PathologyService) {}

  /**
   * 
   * @param dni 
   * @param pathologyDTO 
   */
  @Post('/:dni')
  assingPathologies(
    @Param('dni') dni: string,
    @Body() pathologyDTO: PathologyDTO[],
  ): Promise<PathologyDTO[]> {
    return this.pathologyService.assignPathologies(dni,pathologyDTO);
  }

  /**
   * 
   * @param dni 
   */
  @Get('/:dni')
  GetPatientPathologies(@Param('dni') dni: string): Promise<PathologyDTO[]> {
    return this.pathologyService.getPatientPathologies(dni);
  }
}
