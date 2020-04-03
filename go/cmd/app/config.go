package app

type DBConfig struct {
	Host     string `yaml:"host"`
	Port     int    `yaml:"port"`
	User     string `yaml:"user"`
	Password string `yaml:"password"`
}
type Config struct {
	DbConfig DBConfig `yaml:"db"`
}
