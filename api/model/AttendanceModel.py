from dataclasses import dataclass, asdict


@dataclass
class AttendanceModel:
    attendanceId: int
    attendanceTimestamp: str
    attendanceSupervisor: str
    event: str
    members: list

    def to_dict(self):
        return asdict(self)

    def __repr__(self):
        return f"""AttendanceModel(
            attendanceId = {self.attendanceId},
            attendanceTimestamp = {self.attendanceTimestamp},
            attendanceSupervisor = {self.attendanceSupervisor},
            event = {self.event},
            members = {self.members}
        )"""
