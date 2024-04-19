from datetime import datetime

from sqlalchemy import create_engine, Engine, Column, Integer, DateTime, String
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import scoped_session, sessionmaker

_engine: Engine = create_engine("sqlite:///attendance.db", echo=True)  # name and debug

session = scoped_session(sessionmaker(bind=_engine))

Base = declarative_base()


# create sql database table
class AttendanceTable(Base):
    __tablename__ = "Attendance"
    attendanceId = Column(Integer(), primary_key=True)
    attendanceTimestamp = Column(DateTime(), default=datetime.utcnow())
    attendanceSupervisor = Column(String(500), nullable=False)
    event = Column(String(), nullable=False)
    members = Column(String(), nullable=False)

    def __repr__(self):
        return f"""AttendanceTable(
            attendanceId = {self.attendanceId},
            attendanceTimestamp = {self.attendanceTimestamp},
            attendanceSupervisor = {self.attendanceSupervisor},
            event = {self.event},
            members = {self.members}
        )"""

