import { IsInt, IsNotEmpty, IsNumber, IsPositive, IsString, MinLength } from "class-validator";

export class CreatePokemonDto {

    @IsNumber()
    @IsNotEmpty()
    @IsPositive()
    @IsInt()
    no: number;

    @IsString()
    @IsNotEmpty()
    @MinLength(1)
    name: string;
}
