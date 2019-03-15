import { ApiModelProperty } from '@nestjs/swagger';

export class CreateBookDTO {
  // @ApiModelProperty({description: 'the book id'})
  // readonly id: number;

  @ApiModelProperty({description: 'book title', required: true, type: 'string'})
  readonly title: string;
  
  @ApiModelProperty({description: 'book description', required: true, type: 'string'})
  readonly description: string;
  
  @ApiModelProperty({description: 'book author', required: true, type: 'string'})
  readonly author: string;
}