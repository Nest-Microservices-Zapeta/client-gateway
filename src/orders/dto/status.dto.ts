/* eslint-disable prettier/prettier */
import { IsEnum } from 'class-validator';
import { OrderStatus, OrderStatusList } from '../enum/order.enum';

export class StatusDto {
  @IsEnum(OrderStatusList, {
    message: `Status is not valid are ${OrderStatusList}`,
  })
  status: OrderStatus;
}
