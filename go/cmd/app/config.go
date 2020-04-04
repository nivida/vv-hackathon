package app

type DBConfig struct {
	Host     string `yaml:"host"`
	Port     int    `yaml:"port"`
	User     string `yaml:"user"`
	Password string `yaml:"password"`
}

type GrpcConfig struct {
	Port int `yaml:"port"`
}

type HttpConfig struct {
	Port int `yaml:"port"`
}
type Config struct {
	DbConfig DBConfig   `yaml:"db"`
	Grpc     GrpcConfig `yaml:"grpc"`
	Http     HttpConfig `yaml:"http"`
}
