import { IsNotEmpty, IsNumber, IsPositive } from "class-validator";

export class CreateOrdeDto {
    @IsNotEmpty()
    @IsNumber()
    @IsPositive()
    amount: number;
}
