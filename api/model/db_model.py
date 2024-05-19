from dataclasses import dataclass, asdict


@dataclass
class DbModel:
    status: bool = False
    message: str = ""
    data: list[dict] = None

    def toDict(self):
        return asdict(self)
