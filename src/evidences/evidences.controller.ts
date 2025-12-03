import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EvidencesService } from './evidences.service';
import { CreateEvidenceDto } from './dto/create-evidence.dto';
import { UpdateEvidenceDto } from './dto/update-evidence.dto';
import { MailerService } from 'src/mailer/mailer.service';

@Controller('evidences')
export class EvidencesController {
  constructor(private readonly evidencesService: EvidencesService, private readonly mailService: MailerService) { }

  @Post(':id')
  send(@Param('id') id: string) {
    return this.mailService.example(id);
  }

  @Post()
  create(@Body() createEvidenceDto: CreateEvidenceDto) {
    return this.evidencesService.create(createEvidenceDto);
  }

  @Get()
  findAll() {
    return this.evidencesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.evidencesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEvidenceDto: UpdateEvidenceDto) {
    return this.evidencesService.update(+id, updateEvidenceDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.evidencesService.remove(+id);
  }
}
