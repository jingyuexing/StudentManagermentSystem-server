import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudentModule } from './student/student.module';
import { TeacherModule } from './teacher/teacher.module';
import { MonitorModule } from './monitor/monitor.module';
import { AccountModule } from './account/account.module';


@Module({
  imports: [
    StudentModule,
    TeacherModule,
    MonitorModule,
    AccountModule,
  ],
  providers: [],
  controllers: [],
})
export class AppModule {}
